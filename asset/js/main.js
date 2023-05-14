if (JSON.parse(localStorage.getItem("upload"))) {
  // return
} else {
  localStorage.setItem(
    "upload",
    JSON.stringify([
      {
        img: "https://iili.io/HSnl5aj.png",
        title_name: "Peacock Canva",

        artist_name: "Santta",
        pr: "2000",
        size_by: "6 x 9 ",
        descr:
          "The background of the painting may vary depending on the artist's style and preference, but it is often a muted color to allow the peacock to stand out. Some artists may include other elements such as flowers or foliage to add to the composition.",
        status: true,
        user_email: "bharuchan90@gmail.com",
      },
      {
        img: "https://iili.io/H8cDDKJ.jpg",
        title_name: "Tradiational girl",
        artist_name: "Sruthi",
        pr: "1000",
        size_by: "6 x 9 ",
        descr:
          "John Marshall, the archeologist at Mohenjo-daro who found the figure, described the figure as " +
          "a young girl, her hand on her hip in a half-impudent posture, and legs slightly forward as she beats time to the music with her legs and feet",
        status: true,
        user_email: "bharuchan90@gmail.com",
      },
      // {
      //     img:
      //         "https://iili.io/H8cbtz7.jpg",
      //     title_name:
      //         "Krishna's Art",
      //     artist_name:
      //         "Anil",
      //     pr
      //         :
      //         "1000",
      //     size_by:
      //         "4 x 9 ",
      //     descr:
      //         "The Radha Krishna paintings portray an eternal love that existed between Lord Krishna and Radha. The love story of Radha Krishna is often interpreted as an eternal and majestic that goes beyond any realm.",
      //    status :true
      // }
      // {
      //     img:
      //         "https://iili.io/H8cmgTB.jpg",
      //     title_name:
      //         "Emilia Clarke",
      //     artist_name:
      //         "Bharth",
      //     size_by:
      //         "19 x 9 ",
      //     descr:
      //         "Emilia Clarke looks like a different person without her signature white-blonde mane — which just so happens to be a wig. "+" It takes two-and-a-half hours every day [to apply],"+"she once told The Nation of her "+"Game of Thrones"+"hairdo."
      // },
      // {
      //     img:
      //         "https://iili.io/HvH4cLF.jpg",
      //     title_name:
      //         "Ball Pen Art ",
      //     artist_name:
      //         "Sruthi",
      //     size_by:
      //         "6 x 9 ",
      //     descr:
      //         "Ballpoint pen art is a form of art created using only ballpoint pens, popular for its accessibility and affordability, with artists using a variety of techniques to create intricate and detailed artwork."
      // },
      // {
      //     img:
      //         "https://iili.io/HvH4cLF.jpg",
      //     title_name:
      //         "Ball Pen Art ",
      //     artist_name:
      //         "Sruthi",
      //     size_by:
      //         "6 x 9 ",
      //     descr:
      //         "Ballpoint pen art is a form of art created using only ballpoint pens, popular for its accessibility and affordability, with artists using a variety of techniques to create intricate and detailed artwork."
      // },
      // {
      //     img:
      //         "https://iili.io/HvH4cLF.jpg",
      //     title_name:
      //         "Ball Pen Art ",
      //     artist_name:
      //         "Sruthi",
      //     size_by:
      //         "6 x 9 ",
      //     descr:
      //         "Ballpoint pen art is a form of art created using only ballpoint pens, popular for its accessibility and affordability, with artists using a variety of techniques to create intricate and detailed artwork."
      // }
    ])
  );
}
