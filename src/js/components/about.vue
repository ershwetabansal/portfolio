<template>
    <section id="about-me">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <p class="hero clearfix" v-for="(about, index) in data.about">
                    {{ about }}
                </p>
                <p class="hero">
                    Feel free to approach me if you are looking for someone with <router-link to="/skills">these skills</router-link>.
                </p>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props : ['data']
    }
</script>