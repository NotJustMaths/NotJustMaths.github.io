const supabase_client = window.supabase.createClient(
    'https://uzabwbqayjuhjdjgimct.supabase.co', 
    'sb_publishable_8En9l4Z_3-UPFZTAv2pE-A_HQPXEz3s'
)

async function loadTables(table) {
    const { data, error } = await supabase_client
        .from(table)
        .select()
}

function parseData() {
    var parsedData = JSON.parse(data)
    console.log(parsedData.data[0].id)
}
