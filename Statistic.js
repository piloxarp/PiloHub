const countNames = (arr) => {
  let count = 0;
  arr.forEach((item) => {
    if (item.name !== "") {
      const names = item.name.split("&");
      count += names.length;
    }
  });
  return count;
};

function countElementsWithParentheses(arr) {
  let countWithParentheses = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes("(") && arr[i].name.includes(")")) {
      countWithParentheses++;
    }
  }

  return countWithParentheses;
}

const totalDuration = ListVideos.reduce((accumulator, video) => {
  const duration = video[0].duration.split(":");
  const minutes = parseInt(duration[0]);
  const seconds = parseInt(duration[1]);
  return accumulator + minutes * 60 + seconds;
}, 0);

const AnswerBBCPackComics = countNames(BBC) - countElementsWithParentheses(BBC);
const AnswerGelatomusumePackComics = countNames(Gelatomusume) - countElementsWithParentheses(Gelatomusume);
const AnswerPicturdPackComics = countNames(Picturd) - countElementsWithParentheses(Picturd);
const AnswerOtherComics = countNames(Other) - countElementsWithParentheses(Other);
const AnswerFiveTComics = countNames(FiveT) - countElementsWithParentheses(FiveT);
const AnswerHyanmaruComics = countNames(Hyanmaru) - countElementsWithParentheses(Hyanmaru);
const AnswerYUE_CComics = countNames(YUE_C) - countElementsWithParentheses(YUE_C);
const AnswerNudeMoonComics = Comics.reduce((total, item) => total + item.count, 0);
const AnswerMcomicsComics = countNames(Mcomics) - countElementsWithParentheses(Mcomics);

const AnswerGelatomusumePackArts = Gelatomusume.reduce((total, item) => total + item.count, 0);
const AnswerBBCPackArts = BBC.reduce((total, item) => total + item.count, 0) - 1;
const AnswerPicturdPackArts = Picturd.reduce((total, item) => total + item.count, 0);
const AnswerOtherArts = Other.reduce((total, item) => total + item.count, 0);
const AnswerVideos = Videos.reduce((total, item) => total + item.count, 0);
const Answer5tArts = FiveT.reduce((total, item) => total + item.count, 0);
const AnswerHyanmaruArts = Hyanmaru.reduce((total, item) => total + item.count, 0);
const AnswerYUE_CArts = YUE_C.reduce((total, item) => total + item.count, 0);
const AnswerMcomicsPages = List.reduce((total, item) => total + item.pages, 0);


document.querySelector("#stat_Nude_Moon > nav > h4").innerHTML = "Comics: " + AnswerNudeMoonComics;
document.querySelector("#stat_Comics > nav > h4").innerHTML = "Comics: " + AnswerMcomicsComics;
document.querySelector("#stat_Videos > nav > h4").innerHTML = "Videos: " + AnswerVideos;

document.querySelectorAll("#stat_BBC > nav > h4")[0].innerHTML = "Comics: " + AnswerBBCPackComics;
document.querySelectorAll("#stat_BBC > nav > h4")[1].innerHTML = "Solo arts: " + AnswerBBCPackArts;
document.querySelectorAll("#stat_Other > nav > h4")[0].innerHTML = "Comics: " + AnswerOtherComics;
document.querySelectorAll("#stat_Other > nav > h4")[1].innerHTML = "Solo arts: " + AnswerOtherArts;
document.querySelectorAll("#stat_Gelatomusume > nav > h4")[0].innerHTML = "Comics: " + AnswerGelatomusumePackComics;
document.querySelectorAll("#stat_Gelatomusume > nav > h4")[1].innerHTML = "Solo arts: " + AnswerGelatomusumePackArts;
document.querySelectorAll("#stat_5t > nav > h4")[0].innerHTML = "Comics: " + AnswerFiveTComics;
document.querySelectorAll("#stat_5t > nav > h4")[1].innerHTML = "Solo arts: " + Answer5tArts;
document.querySelectorAll("#stat_Picturd > nav > h4")[0].innerHTML = "Comics: " + AnswerPicturdPackComics;
document.querySelectorAll("#stat_Picturd > nav > h4")[1].innerHTML = "Solo arts: " + AnswerPicturdPackArts;
document.querySelectorAll("#stat_Hyanmaru > nav > h4")[0].innerHTML = "Comics: " + AnswerHyanmaruComics;
document.querySelectorAll("#stat_Hyanmaru > nav > h4")[1].innerHTML = "Solo arts: " + AnswerHyanmaruArts;
document.querySelectorAll("#stat_YUE_C > nav > h4")[0].innerHTML = "Comics: " + AnswerYUE_CComics;
document.querySelectorAll("#stat_YUE_C > nav > h4")[1].innerHTML = "Solo arts: " + AnswerYUE_CArts;

document.querySelector("#stat_TotalComics > nav > h4").innerHTML = AnswerBBCPackComics + AnswerGelatomusumePackComics + AnswerPicturdPackComics + AnswerOtherComics + AnswerFiveTComics + AnswerHyanmaruComics + AnswerHyanmaruComics + AnswerNudeMoonComics;
document.querySelector("#stat_TotalPages > nav > h4").innerHTML = AnswerMcomicsPages;
document.querySelector("#stat_TotalSoloArts > nav > h4").innerHTML = AnswerGelatomusumePackArts + AnswerBBCPackArts + AnswerPicturdPackArts + AnswerOtherArts + AnswerHyanmaruArts + AnswerYUE_CArts + Answer5tArts;
document.querySelector("#stat_TotalVideos > nav > h4").innerHTML = AnswerVideos;

document.querySelectorAll("#stat_TotalVideosTimes > nav > h4")[0].innerHTML = Math.floor(totalDuration / 3600);
document.querySelectorAll("#stat_TotalVideosTimes > nav > h4")[1].innerHTML = Math.floor((totalDuration % 3600) / 60);
document.querySelectorAll("#stat_TotalVideosTimes > nav > h4")[2].innerHTML = totalDuration % 60;
