// eslint-disable-next-line no-unused-vars
export const scrollToSection = (gotTO) => {
    // eslint-disable-next-line no-undef
    document.querySelector("#" + gotTO).scrollIntoView({
        behavior: "smooth"
    })
}