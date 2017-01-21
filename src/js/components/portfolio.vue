<template>
    <section id="portfolio">
        <div class="clearfix" v-for="(company_details, company_name) in data.portfolio">
            <h2>{{ company_details.title }} at {{ company_name }}</h2>
            <p class="period">{{ company_details.period }}</p>
            <p v-for="text in company_details.about">{{ text }}</p>

            <div v-for="project in company_details.projects" class="project-details">
                <div class="row">
                    <div class="col-md-7">
                        <h3>{{ project.title }}
                            <a :href="project.link" v-if="project.link" target="_blank" class="link">
                                <i class="fa fa-link" aria-hidden="true"></i>
                            </a>
                        </h3>
                        <p v-for="text in project.about">
                            {{ text }}
                        </p>

                        <ul class="list-inline list-tech-tags">
                            <li v-for="tag in project.tech">{{ tag }}</li>
                        </ul>

                    </div>
                    <div class="col-md-4 col-md-offset-1" v-if="project.mini_image">
                        <a :href="project.link" v-if="project.link" target="_blank">
                            <img :src="project.mini_image" :alt="project.title" style="width: 100%;"/>
                        </a>

                        <img :src="project.mini_image" :alt="project.title" style="width: 100%;" v-if="!project.link"/>

                    </div>
                </div>
                <div v-if="project.images && project.images.length > 0">
                    <a data-toggle="collapse" style="cursor: pointer;"
                       :data-target="project.target" aria-expanded="false" class="collapsed">
                        <span class="more">See more ...</span>
                        <span class="less">See less...</span>
                    </a>
                    <div class="collapse" :id="project.id">
                        <div class="images">
                            <img :src="source" :alt="project.title" v-for="source in project.images">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props :['data'],
    }
</script>