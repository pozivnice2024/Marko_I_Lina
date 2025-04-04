addEventListener("load", (event) => {});

onload = (event) => {
    
};

function SwitchLanguage(language)
{
    if (language == null)
    {
        language = "serbian";
    }

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