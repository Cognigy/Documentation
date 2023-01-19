import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


const key = <string>process.env.KEY || "d9ec59e151884e97a34d68db03b525ee"
const endpoint = <string>process.env.ENDPOINT_URL || "https://api.cognitive.microsofttranslator.com"
const location = <string>process.env.LOCATION || "global"
const id = uuidv4()

/**
 * translation method that is used to translate every incoming message no matter what into english.
 * The reason behind this is to make sure that something could be found since the documentation and
 * therefore the index is in english but the bot could handle different languages.
 *
 * @param text
 */
export const translate = async (text: string) => {
    const url = endpoint + '/translate?api-version=3.0&to=en'
    const headers = {
        'Ocp-Apim-Subscription-Key': key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-Type': 'application/json',
    }
    const data = [{
        "Text": text
    }]

    let detection = await axios.post(url, data, {headers: headers})
    
    return detection.data[0].translations[0].text;
}