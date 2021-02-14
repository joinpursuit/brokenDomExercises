
const disemvowel = () => {
    const el = document.querySelector("#name-to-disemvowel");
    const p = document.querySelector("#disemvowel-string");
    const str = el.value;
    let output = "";
    const vowels = "aeiou"
    for(const char of str) {
        if(!vowels.includes(char)) {
            output += char;
        }
    }
    p.textContent = output;
}