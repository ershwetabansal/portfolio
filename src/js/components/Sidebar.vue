<template>
    <div class="sidebar">
        <img src="/images/background.jpg" alt="background">
        <div class="overlay"></div>
        <div id="navbar">
            <div class="profile-image" v-cloak>
                <img :src="data.profile_image" :alt="data.name" width="150" />
            </div>
            <h1 v-cloak>{{ data.name }}</h1>
            <h3 v-cloak>{{ data.title }}</h3>
            <ul class="list-unstyled list-navigation">
                <li v-for="(href, title) in data.headers">
                    <router-link :to="href" v-cloak>{{ title }}</router-link>
                </li>
            </ul>
            <ul class="list-inline sticked-to-bottom full-width list-social-links">
                <li v-for="contact in data.contacts">
                    <a :href="contact.link" target="_blank">
                        <i class="fa" :class="contact.class"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props :['data'],
    }
</script>