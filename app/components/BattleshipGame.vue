<template>
    <Page class="page" actionBarHidden="true">
        <WebView :src="'http://192.168.1.15:3000?id='+room.id+'&maxClients='+room.maxClients+'&clients='+room.clients" />
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

