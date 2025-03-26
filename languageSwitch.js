addEventListener("load", (event) => {});

onload = (event) => {
    
};

function SwitchLanguage(language)
{
    let languageTags = document.getElementsByClassName("language_switch");

    for (let i=0; i<languageTags.length; i++)
    {
        if (!languageTags[i].hasAttribute("data-"+language))
        {
            continue;
        }
        languageTags[i].innerHTML = languageTags[i].dataset[language];
    }
}