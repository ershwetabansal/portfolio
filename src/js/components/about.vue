<template>
    <section id="about-me">
        <p class="hero clearfix" v-for="(about, index) in data.about">
            {{ about }}
        </p>
        <p class="hero">
            Feel free to approach me if you are looking for someone with these skills.
        </p>

        <hr>
        <ul class="list-unstyled list-skills">
            <li v-for="(skillset, skillName) in data.skills">
                <h3>{{ skillName }}</h3>
                <ul>
                    <li v-for="skill in skillset" v-html="skill"></li>
                </ul>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        props : ['data']
    }
</script>