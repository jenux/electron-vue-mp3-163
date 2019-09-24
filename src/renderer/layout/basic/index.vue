<template>
    <div class="app">
        <div class="app__top">
            <h1><router-link to="/">{{ $config.title }}</router-link></h1>
            <nav>
                <router-link class="actived" to="/discover">发现音乐</router-link>
                <router-link to="/my">我的音乐</router-link>
                <router-link to="/friend">朋友</router-link>
            </nav>
        </div>
        <div class="app__body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style>