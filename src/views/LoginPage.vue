<template lang="pug">
b-container(class='mainBody' fluid="md")
    div(class='imgBody')
        img(src="../assets/DSGlogo.png")
        h1(class="DSGName") Family of Wisdom
    div(class='formBody d-flex flex-column justify-content-center')
        form(id="form")
                b-form-group(id="phoneLabel" label="Phone Number:" label-for="phoneInput")
                    b-form-input(class="inputBox" id="phoneInput" type="tel" required)
                b-form-group(id="passwordLabel" label="Password:" label-for="passwordInput")
                    b-form-input(class="inputBox" id="passwordInput" type="password" required)
    div(class='buttonBody d-flex flex-column justify-content-center')
        b-button(id="forgotBtn") Forgot Password/ Change Phone Number
        b-button(id="loginBtn" variant="primary" form="form" pill) Login
</template>

<style lang="scss" scoped>
$base-color-purple :#50276B;
.mainBody{
    margin-top: 5em;
}
.imgBody{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

img {
    width: 208px;
    height: 72px;
}

h1 {
    font-weight: 700;
    font-size: 24px;
}

.formBody {
    color: white;
    margin: 2em 2rem;
    background-color: $base-color-purple;
    border-radius: 20px;
    padding: 3rem 0.5rem;
}

#phoneLabel {
    margin: 1rem 2rem;
    font-weight: 500;
    font-size: 14px;
}

#passwordLabel {
    margin: 1rem 2rem;
    font-weight: 500;
    font-size: 14px;
}

#forgotBtn {
    color: black;
    border: none;
    background-color: transparent;
    font-size: 12px;
}

#loginBtn {
    margin: 80px 100px;
    background-color: $base-color-purple;
    font-weight: 500;
    font-size: 15px;
    padding: 1em;
}

#loginBtn:active {
    background-color: #6b3b8b;
}
</style>