# Listen

Listen command is used to fork and send an audio stream(s) in real-time to your application over a websocket connection for processing. Our [Call recording]() feature is based on this command.

| Properties | Description  | 
| --------------- | ------------ |
|Format | 16-bit |
|Encoding| PCM |
|Sample rate| user-specified |
|connection type| websocket|

One text frame is sent immediately after the websocket connection is established to send a JSON string with call attributes over an HTTP request. Additional metadata can also be added to this payload using the metadata property.

Listen command can also be nested in a [Dial]() or [Config]() commands, which allows the audio for a call between two parties to be sent to a remote websocket server.

```
{
  "verb": "listen",
  "url": "wss://myrecorder.example.com/calls",
  "mixType" : "stereo"
}
```

You can use the following options in the `listen` command:

| option          | description  | required   |
| --------------- | ------------ | ---------- |
| actionHook      | webhook to invoke when listen operation ends. The information will include the duration of the audio stream, and also a 'digits' property if the recording was terminated by a dtmf key. | yes        |
| finishOnKey     | The set of digits that can end the listen action | no         |
| maxLength       | the maximum length of the listened audio stream, in secs | no         |
| metadata        | arbitrary data to add to the JSON payload sent to the remote server when websocket connection is first connected | no         |
| mixType         | "mono" (send single channel), "stereo" (send dual channel of both calls in a bridge), or "mixed" (send audio from both calls in a bridge in a single mixed audio stream) Default: mono   | no         |
| passDtmf        | if true, any dtmf digits detected from the caller will be passed over the websocket as text frames in JSON format. Default: false | no         |
| playBeep        | true, false whether to play a beep at the start of the listen operation. Default: false | no         |
| sampleRate      | sample rate of audio to send (allowable values: 8000, 16000, 24000, 48000, or 64000). Default: 8000 | no         |
| timeout         | the number of seconds of silence that terminates the listen operation. | no         |
| transcribe      | a nested [transcribe]() verb | no         |
| url             | url of remote server to connect to | yes        |
| wsAuth.username | HTTP basic auth username to use on websocket connection | no         |
| wsAuth.password | HTTP basic auth password to use on websocket connection | no |


## Passing DTMF

Any DTMF digits entered by the far end party on the call can optionally be passed to the websocket server as JSON text frames by setting the passDtmf property to true. Each DTMF entry is reported separately in a payload that contains the specific DTMF key that was entered, as well as the duration which is reported in RTP timestamp units. The payload that is sent will look like this:

```
{
  "event": "dtmf",
  "dtmf": "2",
  "duration": "1600"
}
```

## Bidirectional audio
Audio can also be sent back over the websocket. This audio, if supplied, will be played out to the caller. 

!!! note "Not supported when nested in Dial or Listen"
    Bidirectional audio is not supported when the [Listen]() is nested in the context of a [Dial]() verb

The far-end websocket server supplies bidirectional audio by sending a JSON text frame over the websocket connection:

```
{
  "type": "playAudio",
  "data": {
    "audioContent": "base64-encoded content..",
    "audioContentType": "raw",
    "sampleRate": "16000"
  }
}
```

In the example above, raw (headerless) audio is sent. The audio must comply with the standard properties of encoding and format, with a configurable sample rate of either 8000, 16000, 24000, 32000, 48000, or 64000 khz. 

Alternatively, a `wave` file format can be supplied by using type "wav" (or "wave"), and in this case no `sampleRate` property is needed. In all cases, the audio must be base64 encoded when sent over the socket.

If multiple `playAudio` commands are sent before the first has finished playing they will be queued and played in order. You may have up to 10 queued playAudio commands at any time.

Once a `playAudio` command has finished playing out the audio, a `playDone` JSON text frame will be sent over the websocket connection for confirmation:

```
{
  "type": "playDone"
}
```

A `killAudio` command can be sent by the websocket server to stop the playback of audio that was started via a previous `playAudio` command:

```
{
  "type": "killAudio"
}
```

If the websocket connection wishes to end the `listen`, it can send a disconnect command:

```
{
  "type": "disconnect"
}
```