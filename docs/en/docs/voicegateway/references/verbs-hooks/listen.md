---
title: "Listen"
slug: "listen"
hidden: false
---

# Listen

The `listen` command sends real-time audio streams to your application over a WebSocket connection for processing.
The [Call Recording](../../webapp/recent-calls.md#call-recordings) feature relies on this command.

This table outlines the properties related to the audio streams sent by the `listen` command:

| Properties      | Description    | 
|-----------------|----------------|
| Format          | 16-bit         |
| Encoding        | PCM            |
| Sample rate     | user-specified |
| Connection type | websocket      |

One text frame is sent immediately
after the WebSocket connection is established to send a JSON string with call attributes over an HTTP request.
Additional metadata can also be added to this payload using the `metadata` parameter.

The `listen` command can also be nested in a [`dial`](dial.md) or [`config`](config.md) command, allowing the audio for a call between two parties to be sent to a remote WebSocket server.

```json
{
  "verb": "listen",
  "url": "wss://myrecorder.example.com/calls",
  "mixType" : "stereo"
}
```

## Configuration

The full set of configuration parameters:

| Parameters      | Description                                                                                                                                                                                                                                                        | Required |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| actionHook      | A webhook to receive an HTTP POST when the listen operation ends. The information will include the duration of the audio stream, and also a `digits` property if the recording was terminated by a DTMF key.                                                                     | Yes      |
| finishOnKey     | The set of digits that can end the listen action.                                                                                                                                                                                                                  | No       |
| maxLength       | The maximum length of the listened audio stream in seconds.                                                                                                                                                                                                        | No       |
| metadata        | Arbitrary data to add to the JSON payload sent to the remote server when the WebSocket connection is first established.                                                                                                                                            | No       |
| mixType         | The following types can be specified:<br> - `mono` — sends a single channel,<br> - `stereo` — sends a dual channel of both calls in a bridge,<br> - `mixed` — sends audio from both calls in a bridge in a single mixed audio stream. The default value is `mono`. | No       |
| passDtmf        | If this parameter is `true`, detected DTMF digits will be sent over WebSocket as JSON text frames. The default value is `false`.                                                                                                                                   | No       |
| playBeep        | Enable a beep sound when the listen operation starts. The default value is `false`.                                                                                                                                                                                | No       |
| sampleRate      | The sample rate of audio to send. Allowable values: `8000`, `16000`, `24000`, `48000`, or `64000`. The default value is `8000`.                                                                                                                                    | No       |
| timeout         | The number of seconds of silence that terminates the listen operation.                                                                                                                                                                                             | No       |
| transcribe      | A nested [transcribe](transcribe.md) command.                                                                                                                                                                                                                      | No       |
| url             | The URL of the remote server to connect to.                                                                                                                                                                                                                        | Yes      |
| wsAuth.username | The HTTP basic auth username to use on the WebSocket connection.                                                                                                                                                                                                   | No       |
| wsAuth.password | The HTTP basic auth password to use on the WebSocket connection.                                                                                                                                                                                                   | No       |

## Passing DTMF

Any DTMF digits entered by the far end party on the call can optionally be passed to the WebSocket server as JSON text frames by setting the `passDtmf` property to `true`. Each DTMF entry is reported separately in a payload containing the specific DTMF key that was entered, along with its duration reported in RTP timestamp units. 

The payload example:

```json
{
  "event": "dtmf",
  "dtmf": "2",
  "duration": "1600"
}
```

## Bidirectional Audio

Audio can also be sent back over the WebSocket. This audio, if supplied, will be played out to the caller.

!!! warning
    Bidirectional audio is not supported when the [`listen`](listen.md) is nested in the context of a [`dial`](dial.md) command.

The far-end WebSocket server supplies bidirectional audio by sending a JSON text frame over the WebSocket connection:

```json
{
  "type": "playAudio",
  "data": {
    "audioContent": "base64-encoded content..",
    "audioContentType": "raw",
    "sampleRate": "16000"
  }
}
```

In the example above, raw (headerless) audio is sent. The audio must comply with the standard properties of encoding and format, with a configurable sample rate of either 8000, 16000, 24000, 32000, 48000, or 64000 kHz.

Alternatively, a `wave` file format can be supplied by using type `wav` (or `wave`), and in this case, no `sampleRate` property is needed. In all cases, the audio must be base64 encoded when sent over the socket.

If multiple `playAudio` commands are sent before the first has finished playing, they will be queued and played in order. You may have up to 10 queued `playAudio` commands at any time.

Once a `playAudio` command has finished playing out the audio, a `playDone` JSON text frame will be sent over the WebSocket connection for confirmation.

```json
{
  "type": "playDone"
}
```

A `killAudio` command can be sent by the WebSocket server to stop the playback of audio that was started via a previous `playAudio` command:

```json
{
  "type": "killAudio"
}
```

If the WebSocket connection wishes to end the `listen`, it can send a disconnect command:

```json
{
  "type": "disconnect"
}
```