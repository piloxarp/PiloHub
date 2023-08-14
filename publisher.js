

    document.querySelectorAll('input[name="type"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.checked) {
        var selectedValue = this.value;
        // Do something with the selected value
        console.log(selectedValue);
        TypeGenerate(selectedValue);
        sessionStorage.setItem("type_format",selectedValue);
      }
    });
  });


  

  function TypeGenerate(type) {
    let container = document.querySelector(".main_data");
    container.innerHTML = "";
    document.getElementById('pagesContainer').innerHTML = '';
    sessionStorage.clear();
    let nav = document.createElement("nav");
    let nav2 = document.createElement("nav");
    let label = document.createElement("label");
    let label2 = document.createElement("label");
    let input = document.createElement("input");
    let input2 = document.createElement("input"); 
    label.setAttribute("for","number");
    label.innerHTML = "Count";
    input.type = "number";
    input.id = "counterInput";
    input.setAttribute("value",0);
    input.setAttribute("oninput","generateInputFields()");       
    if (type === "comics") {
        label2.setAttribute("for","comics");
        label2.innerHTML = "Comics";
        input2.type = "text";
        input2.id = "name_comics";
        input2.placeholder = "Enter name";
        input2.setAttribute("oninput","NameComics()");
        let input4 = document.createElement("input");
        let label4 = document.createElement("label");
        let nav4 = document.createElement("nav");
        label4.setAttribute("for","tag");
        label4.innerHTML = "Tag";
        input4.type = "text";
        input4.id = "tag_comics";
        input4.placeholder = "Enter tag";
        input4.setAttribute("oninput","TagComics()");
        let select = document.createElement("select");
        select.id = "select";
        let option = document.createElement("option");
        option.innerHTML = "Default";
        let option2 = document.createElement("option");
        option2.innerHTML = "bbc";
        let label3 = document.createElement("label");
        label3.innerHTML = "Theme";
        let nav3 = document.createElement("nav");
        nav.prepend(label);nav.append(input);container.prepend(nav);
        nav2.prepend(label2);nav2.append(input2);container.append(nav2);
        nav4.prepend(label4);nav4.append(input4);container.append(nav4);
        select.prepend(option);select.append(option2);nav3.prepend(select);nav3.prepend(label3);container.append(nav3);

    } else if (type === "art") {
        nav.prepend(label);nav.append(input);container.prepend(nav);
    } else if (type === "video") {
        nav.prepend(label);nav.append(input);container.prepend(nav);
    }
  }

  
function generateInputFields() {
    let counterInput = document.getElementById('counterInput');    
let newValue = parseInt(counterInput.value);

if (!isNaN(newValue) && newValue > 0) {
    document.getElementById('pagesContainer').innerHTML = '';
if (sessionStorage.type_format == "comics") {
    for (let i = 0; i < newValue; i++) {
        let inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'list_banner';
        inputField.placeholder = 'Enter banner ' + (i + 1);
        inputField.setAttribute("oninput",`Page_Save('page',${i +1})`);
        inputField.name = `page_${i + 1}`;
        let label = document.createElement('label');
        label.setAttribute("for",`page_${i + 1}`);
        label.innerHTML = `banner ${i + 1}: `;
        let span = document.createElement("span");
        sessionStorage.setItem("comics_pages",i + 1);
        span.prepend(label);span.append(inputField);pagesContainer.appendChild(span);
        
    }
} else if (sessionStorage.type_format == "art") {
    for (let i = 0; i < newValue; i++) {
        let nav = document.createElement("nav");
        let inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'name';
        inputField.placeholder = 'Enter name ' + (i + 1);
        inputField.setAttribute("oninput",`Page_Save('name',${i +1})`);
        inputField.name = `name_${i + 1}`;
        let label = document.createElement('label');
        label.setAttribute("for",`name_${i + 1}`);
        label.innerHTML = "name:";
        let span = document.createElement("span");

        let inputField2 = document.createElement('input');
        inputField2.type = 'text';
        inputField2.className = 'list_banner';
        inputField2.placeholder = 'Enter banner ' + (i + 1);
        inputField2.setAttribute("oninput",`Page_Save('page',${i +1})`);
        inputField2.name = `page_${i + 1}`;
        let label2 = document.createElement('label');
        label2.setAttribute("for",`page_${i + 1}`);
        label2.innerHTML = "banner:";
        let span2 = document.createElement("span");
        sessionStorage.setItem("comics_pages",i + 1);
        span.prepend(label);span.append(inputField);nav.prepend(span);
        span2.prepend(label2);span2.append(inputField2);nav.append(span2);
        pagesContainer.appendChild(nav);
        
    }
} else if (sessionStorage.type_format == "video") {
  for (let i = 0; i < newValue; i++) {
    let nav = document.createElement("nav");
    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'name';
    inputField.placeholder = 'Enter name ' + (i + 1);
    inputField.setAttribute("oninput",`Page_Save('name',${i +1})`);
    inputField.name = `name_${i + 1}`;
    let label = document.createElement('label');
    label.setAttribute("for",`name_${i + 1}`);
    label.innerHTML = "name:";
    let span = document.createElement("span");

    let inputField2 = document.createElement('input');
    inputField2.type = 'text';
    inputField2.className = 'list_banner';
    inputField2.placeholder = 'Enter banner ' + (i + 1);
    inputField2.setAttribute("oninput",`Page_Save('banner',${i +1})`);
    inputField2.name = `banner_${i + 1}`;
    let label2 = document.createElement('label');
    label2.setAttribute("for",`banner_${i + 1}`);
    label2.innerHTML = "banner:";
    let span2 = document.createElement("span");
    sessionStorage.setItem("video_count",i + 1);

    let inputField3 = document.createElement('input');
    inputField3.type = 'text';
    inputField3.className = 'link';
    inputField3.placeholder = 'Enter link ' + (i + 1);
    inputField3.setAttribute("oninput",`Page_Save('link',${i +1})`);
    inputField3.name = `link_${i + 1}`;
    let label3 = document.createElement('label');
    label3.setAttribute("for",`link_${i + 1}`);
    label3.innerHTML = "link:";
    let span3 = document.createElement("span");

    let inputField4 = document.createElement('input');
    inputField4.type = 'text';
    inputField4.className = 'duration';
    inputField4.placeholder = 'Enter duration ' + (i + 1);
    inputField4.setAttribute("oninput",`Page_Save('duration',${i +1})`);
    inputField4.name = `duration_${i + 1}`;
    let label4 = document.createElement('label');
    label4.setAttribute("for",`duration_${i + 1}`);
    label4.innerHTML = "duration:";
    let span4 = document.createElement("span");

    let inputField5 = document.createElement('input');
    inputField5.type = 'text';
    inputField5.className = 'author';
    inputField5.placeholder = 'Enter author ' + (i + 1);
    inputField5.setAttribute("oninput",`Page_Save('author',${i +1})`);
    inputField5.name = `author_${i + 1}`;
    let label5 = document.createElement('label');
    label5.setAttribute("for",`author_${i + 1}`);
    label5.innerHTML = "author:";
    let span5 = document.createElement("span");    

    sessionStorage.setItem("video_count",i + 1);

    span.prepend(label);span.append(inputField);nav.append(span);
    span2.prepend(label2);span2.append(inputField2);nav.append(span2);
    span3.prepend(label3);span3.append(inputField3);nav.append(span3);
    span4.prepend(label4);span4.append(inputField4);nav.append(span4);
    span5.prepend(label5);span5.append(inputField5);nav.append(span5);

    pagesContainer.appendChild(nav);
    
}    
}}
else {
counterInput.value = 1; 
document.getElementById('counter').innerText = 1;
generateInputFields();
}}


function NameComics() {
    let comics_name = document.querySelector("#name_comics").value;
    sessionStorage.setItem("comics_name",comics_name);
}

function TagComics() {
  let comics_tag = document.querySelector("#tag_comics").value;
  sessionStorage.setItem("comics_tag",comics_tag);
}

function Page_Save(name,page) {
    let data = document.querySelector(`input[name="${name}_${page}"]`).value;
    sessionStorage.setItem(`${name}_${page}`,data);
}

function Submit() {
  let header = document.querySelector(".output > h2");
  header.innerHTML = `Type: ${sessionStorage.type_format}`
  document.querySelector("#output_add").innerHTML = "";
    if (sessionStorage.type_format == "comics") {
      const comicsName = sessionStorage.getItem('comics_name');
      const comicsPages = parseInt(sessionStorage.getItem('comics_pages'));
      var selectMenu = document.querySelector('#select');
      var selectedOption = selectMenu.options[selectMenu.selectedIndex];    
      const comicsTheme = selectedOption.value;
      let comicsTag = sessionStorage.getItem('comics_tag');
  
      const pages = [];
      for (let i = 1; i <= comicsPages; i++) {
        const pageKey = `page_${i}`;
        const pageValue = sessionStorage.getItem(pageKey);
        pages.push(pageValue);
      }
  
      const data = {
        comics_name: comicsName,
        comics_pages: comicsPages,
        pages: pages,
        theme: comicsTheme,
        tag: comicsTag
      };
  
      const output = data.pages.map(page => ({
        name: data.comics_name,
        banner: page
      }));
  
      const result = `${data.comics_name.replace(/\s/g, '_')} = [\n\t${output.map(obj => `{name:"${obj.name}", banner:"${obj.banner}"}`).join(",\n\t")},\n];`;
  
      let textarea = document.querySelector("textarea");
      textarea.innerHTML = result;
      textarea.style.height = textarea.scrollHeight + 'px';

      const resultMcomics = `\t{name:"${data.comics_name.replace(/\s/g, '_')}", banner:"${data.pages[0]}", pages:${data.comics_pages}, theme:"${data.theme}", tag:"${data.tag}"},`;
      let textarea2 = document.createElement("textarea");
      textarea2.innerHTML = resultMcomics;
      textarea2.style.height = "60px";
      let h2 = document.createElement("h2");
      h2.innerHTML = "Mcomics_data.js";
      document.querySelector("#output_add").append(h2);
      document.querySelector("#output_add").append(textarea2);
      let btn = document.createElement("button");
      btn.setAttribute("onclick","copyText(1)");
      btn.id = "textarea_copy_btn";
      btn.innerHTML = "Copy"
      document.querySelector("#output_add").append(btn);

    } else if (sessionStorage.type_format == "art") {
      const artPage = parseInt(sessionStorage.getItem('comics_pages'));
  
      const pages = [];
      for (let i = 1; i <= artPage; i++) {
        const pageKey = `page_${i}`;
        const pageValue = sessionStorage.getItem(pageKey);
        pages.push(pageValue);
      }
  
      const name_pages = [];
      for (let i = 1; i <= artPage; i++) {
        const pageKey = `name_${i}`;
        const pageValue = sessionStorage.getItem(pageKey);
        name_pages.push(pageValue);
      }
  
      const data = {
        comics_name: name_pages,
        comics_pages: artPage,
        pages: pages
      };
  
      const output = data.pages.map((page, index) => ({
        name: data.comics_name[index],
        banner: page
      }));
  
      const result = `\t${output.map(obj => `{name:"${obj.name}", banner:"${obj.banner}"}`).join(",\n\t")},`;
  
      let textarea = document.querySelector("textarea");
      textarea.innerHTML = result;
      textarea.style.height = textarea.scrollHeight + 'px';
    } else if (sessionStorage.type_format == "video") {
      const videoCount = parseInt(sessionStorage.getItem('video_count'));

      const banners = [];
      const name_pages = [];
      const links = [];
      const durations = [];
      const authors = [];
      
      for (let i = 1; i <= videoCount; i++) {
        const bannerKey = `banner_${i}`;
        const bannerValue = sessionStorage.getItem(bannerKey);
        banners.push(bannerValue);
        
        const nameKey = `name_${i}`;
        const nameValue = sessionStorage.getItem(nameKey);
        name_pages.push(nameValue);
        
        const linkKey = `link_${i}`;
        const linkValue = sessionStorage.getItem(linkKey);
        links.push(linkValue);
        
        const durationKey = `duration_${i}`;
        const durationValue = sessionStorage.getItem(durationKey);
        durations.push(durationValue);
        
        const authorKey = `author_${i}`;
        const authorValue = sessionStorage.getItem(authorKey);
        authors.push(authorValue);
      }
      
      const data = {
        video_name: name_pages,
        video_pages: videoCount,
        banner: banners,
        links: links,
        durations: durations,
        authors: authors
      };
      
      const output = data.banner.map((banners, index) => ({
        name: data.video_name[index],
        banner: banners,
        link: data.links[index],
        duration: data.durations[index],
        author: data.authors[index]
      }));
      
      const result = `\t${output.map(obj => `[{name: "${obj.name.replace(/\s/g, '_')}",banner: "${obj.banner ?? 'imagenotfound.png'}",link: "${obj.link}",duration: "${obj.duration}",author: "${obj.author ?? 'Unknown'}"}]`).join(",\n\t")},`;
      
      
      let textarea = document.querySelector("textarea");
      textarea.innerHTML = result;
      textarea.style.height = textarea.scrollHeight + 'px';
           
    }
    Preview(sessionStorage.type_format);
  }


function Preview(format) {
  document.querySelector("content").innerHTML = "";
  const artPage = parseInt(sessionStorage.getItem('comics_pages'));
      const pages = [];
      for (let i = 1; i <= artPage; i++) {
        const pageKey = `page_${i}`;
        const pageValue = sessionStorage.getItem(pageKey);
        pages.push(pageValue);
      }
          
  if (format == "comics") {
    let comics_name = sessionStorage.getItem('comics_name');
    let content = document.querySelector("content");
        navFlex = document.createElement("nav");
    navFlex.className = "mangaFlex";
content.append(navFlex);
  for (var x = pages.length - 1; x >= 0; x--) {
    let div = document.createElement("div");
    div.className = "paper";
    div.style.id = comics_name;
    let a = document.createElement("a");
    a.href = pages[x];
    let img = document.createElement("img");
    img.src = pages[x];
    img.loading = "lazy";
    nav = document.createElement("nav");
    nav.className = "description";
    h2 = document.createElement("h2");
    h2.innerHTML = comics_name.replace(/_/g, " ");
    p = document.createElement("p");
    p.innerHTML = (x+1) + "/" + pages.length;
  navFlex.prepend(div);div.append(a);a.append(img);div.append(nav);nav.append(h2);nav.append(p);
}
  } else if (format == "art") {
      const name_pages = [];
      for (let i = 1; i <= artPage; i++) {
        const pageKey = `name_${i}`;
        const pageValue = sessionStorage.getItem(pageKey);
        name_pages.push(pageValue);
      }
    let content = document.querySelector("content");
        navFlex = document.createElement("nav");
    navFlex.className = "mangaFlex";
content.append(navFlex);
  for (var x = pages.length - 1; x >= 0; x--) {
    console.log(name_pages[x])
    let div = document.createElement("div");
    div.className = "paper";
    div.style.id = name_pages[x];
    let a = document.createElement("a");
    a.href = pages[x];
    let img = document.createElement("img");
    img.src = pages[x];
    img.loading = "lazy";
    nav = document.createElement("nav");
    nav.className = "description";
    h2 = document.createElement("h2");
    h2.innerHTML = name_pages[x].replace(/_/g, " ");
    p = document.createElement("p");
    p.innerHTML = (x+1) + "/" + pages.length;
  navFlex.prepend(div);div.append(a);a.append(img);div.append(nav);nav.append(h2);nav.append(p);
}      
  } else if (format == "video") {
      const videoCount = parseInt(sessionStorage.getItem('video_count'));
      let content = document.querySelector("content");
      const banners = [];
      const name_pages = [];
      const links = [];
      const durations = [];
      const authors = [];
      
      for (let i = 1; i <= videoCount; i++) {
        const bannerKey = `banner_${i}`;
        const bannerValue = sessionStorage.getItem(bannerKey);
        banners.push(bannerValue);
        
        const nameKey = `name_${i}`;
        const nameValue = sessionStorage.getItem(nameKey);
        name_pages.push(nameValue);
        
        const linkKey = `link_${i}`;
        const linkValue = sessionStorage.getItem(linkKey);
        links.push(linkValue);
        
        const durationKey = `duration_${i}`;
        const durationValue = sessionStorage.getItem(durationKey);
        durations.push(durationValue);
        
        const authorKey = `author_${i}`;
        const authorValue = sessionStorage.getItem(authorKey);
        authors.push(authorValue);
      }
      for (var i = videoCount - 1; i >= 0; i--) {
      let div = document.createElement("div");
      let iframe = document.createElement("iframe");
      let inf = document.createElement("div");
      iframe.src = links[i];
      iframe.width = "1045";
      iframe.height = "560";
      iframe.allow = "fullscreen";
      let inf_vid = document.createElement("div");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let nav = document.createElement("nav");
      h2.innerHTML = name_pages[i];
      p.innerHTML = durations[i];
      nav.className = "vc-tags";
      nav.setAttribute("id","tag-author");
      nav.style = "margin-bottom:0px;";
      nav.innerHTML = authors[i];
      inf_vid.className = "info_vid";
      inf_vid.prepend(nav);;inf_vid.prepend(p);inf_vid.prepend(h2)
      inf.className = "container-inf";
      div.className = "container-vids";
      inf.prepend(inf_vid);
      div.prepend(iframe);
      div.append(inf);
      content.prepend(div);

    }
  }
}


document.addEventListener("DOMContentLoaded", function() {
    sessionStorage.clear();
    document.querySelector('input[value="comics"]').click();
});