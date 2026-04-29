import { createClient } from 'npm:@supabase/supabase-js@2'

const supabase = createClient(
    'https://notjustmaths.github.io', 
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
