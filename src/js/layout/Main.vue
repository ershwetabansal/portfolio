<template>
    <div class="container">
        <div id="navbar" >
            <div class="profile-image">
                <img :src="data.profile_image" :alt="data.name" width="150" />
            </div>
            <h1>{{ data.name }}</h1>
            <h2>{{ data.title }}</h2>
            <ul class="list-unstyled">
                <li v-for="(href, title) in data.headers">
                    <a :href="href">{{ title }}</a>
                </li>
            </ul>
            <ul class="list-inline sticked-to-bottom full-width text-center">
                <li>
                    <a href="mailto:ershwetabansal@gmail.com">
                        <i class="fa fa-envelope-o"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/shweta_bansal" target="_blank">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ershwetabansal" target="_blank">
                        <i class="fa fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shweta-bansal-26a91216" target="_blank">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </div>

        <slot></slot>
    </div>
</template>

<script>
    export default {}
</script>