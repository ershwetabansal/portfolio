<template>
    <section id="skills">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <ul class="list-unstyled list-skills">
                    <li v-for="(skillset, skillName) in data.skills">
                        <h3>{{ skillName }}</h3>
                        <ul class="list-unstyled">
                            <li v-for="skill in skillset">{{ skill }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props :['data'],
    }
</script>