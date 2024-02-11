import {createClient} from '@sanity/client'


export const client = createClient({
  projectId: '5mheg05q',
  dataset: 'production',
})

console.log("sanity success webCollector====>", client)