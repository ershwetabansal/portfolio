<template>
    <section id="portfolio">

        <p style="font-size: 17px;" v-for="line in data.portfolio_paragraph">
            {{ line }}
        </p>
        <div class="dock-container">
            <div class="dock">
                <ul class="list-inline list-projects">
                    <li>
                        <img src="/images/portfolio/energy_aspects.png" data-key="energy_aspects"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/ea_mobile.png" data-key="energy_aspects"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/e-mail-design.png" data-key="ea_email"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/publisher.png" data-key="publisher"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/hr_talent.png" data-key="hr_talent"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/hr_talent_2.png" data-key="hr_talent"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/dubal_1.png" data-key="dubal"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/dubal_2.png" data-key="dubal"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/dubal_3.png" data-key="dubal"/>
                    </li>
                    <li>
                        <img src="/images/portfolio/approval_app.png" data-key="approval_app"/>
                    </li>
                </ul>
                <div class="dock-base"></div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props :['data'],
    }
</script>