// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// My solution

function nerdify(txt){
    txt = txt.replace(/a/gi, "4")
    txt = txt.replace(/e/gi, "3")
    txt = txt.replace(/l/g, "1")
    return txt;
  }