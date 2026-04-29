import { corsHeaders } from 'jsr:@supabase/supabase-js@2/cors'

console.log(`Function "browser-with-cors" up and running!`)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name } = await req.json()
    const data = {
      message: `Hello ${name}!`,
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})

import { createClient } from 'npm:@supabase/supabase-js@2'

const supabase = createClient(
    'https://uzabwbqayjuhjdjgimct.supabase.co', 
    'sb_publishable_8En9l4Z_3-UPFZTAv2pE-A_HQPXEz3s'
)

async function loadTables(table) {
    const { data, error } = await supabase
        .from(table)
        .select()
}

function parseData() {
    var parsedData = JSON.parse(data)

    console.log(parsedData.data[0].id)
}
