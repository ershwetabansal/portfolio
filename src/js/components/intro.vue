<template>
    <section id="intro">
        <div class="vcenter">
            <ul class="intro_list">
                <li v-for="item in data.intro">{{ item }}</li>
            </ul>
            <a href="#about-me" style="font-size: 2em;margin-top: 4em; display: inline-block;">
                <i class="fa fa-angle-down"></i>
            </a>
        </div>
    </section>
</template>

<script>
    export default {
        props :['data'],
  }
</script>