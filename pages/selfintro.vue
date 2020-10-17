<template>
  <div id="main">
    <section id="header" class="hero is-black" style="background-color:#7289da">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Japan BugBounty Forums
          </p>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li>
                <a href="/">概要</a>
              </li>
              <li>
                <a href="/agreement">参加規約</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section id="content">
      <div class="container main-content">

        <div class="has-text-centered">
          <h1 class="title">自己紹介テンプレート</h1>
          <p>組み合わせて少し変えると自己紹介が完成します。時短用にどうぞ😄　目安は250文字程度です。</p>
          <hr/>
        </div>

        <div class="columns">
          <div class="column is-harf has-text-centered">
            <h1 class="title" style="color:#7289da">あいさつ</h1>
          </div>
          <div class="column">
            <ul>
              <li>はじめまして！〇〇(ニックネーム)です。</li>
            </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column is-harf has-text-centered">
            <h1 class="title" style="color:#7289da">自分について<br/>(近況・趣味・仕事など)</h1>
          </div>
          <div class="column">
            <ul>
              <li>昼は都内でSE、夜は趣味で〇〇をやっています。</li>
              <li>CTFにハマっている大学生です。</li>
              <li>フルタイムのバグハンターです。</li>
            </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column is-harf has-text-centered">
            <h1 class="title" style="color:#7289da">フォーラムでやりたいこと</h1>
            <p>ここを記入すると、フォーラムの中で同志が見つかりやすくなります。</p>
          </div>
          <div class="column">
            <ul>
              <li>みなさんとCTFについて情報共有できたら良いなと思っています。<br/>担当はWeb問です。チームメンバーも絶賛募集中！</li>
              <li>バグバウンティに挑戦したいと思っています！<br/>脆弱性を見つけるコツを教えてもらいたいです。</li>
            </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column is-harf has-text-centered">
            <h1 class="title" style="color:#7289da">よろしくお願いします</h1>
          </div>
          <div class="column">
            <ul>
              <li>よろしくお願いします！</li>
            </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column is-harf has-text-centered">
            <h1 class="title" style="color:#7289da">SNS等のリンク</h1>
            <p>載せたい場合は載せます。</p>
          </div>
          <div class="column">
            <ul>
              <li>
                <p>Twitter</p>
                <p>HackerOne/Bugcrowd</p>
                <p>自分のホームページ/ブログ</p>
                <p>記事等</p>
              </li>
            </ul>
          </div>
        </div>







      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.main-content {
  margin: 30px;
}

.main-content ul {
  padding: 30px;
}
.main-content li {
  margin-bottom: 20px;
  position: relative;
  padding: 20px;
  color: #FFF;
  background-color: #7289da;
  border-radius: 10px;
}

.main-content li::before {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: -15px;
  top: 20px;
  border-right: 15px solid #7289da;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

</style>
