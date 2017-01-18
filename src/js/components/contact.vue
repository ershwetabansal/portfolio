<template>
<section id="contact-me">
    <h2>Contact me</h2>

    <p>Please feel free to send me an e-mail if you would like my CV or if you would like to have a chat
        for the next role you are looking for.</p>

    <br>
    <table>
        <tbody>
        <tr v-for="contact in data.contacts">
            <td width="100" style="padding-bottom: 10px;">
                {{ contact.text }}:
            </td>
            <td style="padding-bottom: 10px;">
                <a :href="contact.links">
                    <i class="fa" :class="contact.class"></i>
                    {{ contact.linkText }}
                </a>
            </td>
        </tr>
        </tbody>
    </table>
</section>
</template>

<script>
    export default {
        props :['data'],
    }
</script>