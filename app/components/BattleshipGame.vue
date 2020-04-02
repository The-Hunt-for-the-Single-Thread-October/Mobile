<template>
    <Page class="page" actionBarHidden="true">
        <WebView :src="'http://51.91.8.97:3000?id='+room.id+'&maxClients='+room.maxClients+'&clients='+room.clients" />
    </Page>
</template>

<script>
    export default {
        name:"BattleshipFame",
        props:["room"]
    }
</script>


<style scoped lang="scss">
</style>

