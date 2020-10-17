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
              <li class="is-active">
                <a href="/agreement">参加規約</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section id="description">
      <div class="container desc-content">
        <h2 class="has-text-centered attention">このフォーラムに参加するためには以下の規約に同意し、違反することのないように注意してください。</h2>
        <div class="columns">
          <div class="column is-one-third">
            <h1 class="title has-text-centered" style="color:#7289da">参加規約</h1>
          </div>
          <div class="column">
            本規約は、当フォーラムに参加するすべてのユーザ(以下参加者)に適用され、参加者が遵守すべき規約を定めたものです。
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third">
            <h1 class="title has-text-centered" style="color:#7289da">禁止事項</h1>
          </div>
          <div class="column">
            <ol>
              <li>誹謗中傷や差別的な発言</li>
              <li>スパム・荒らし行為</li>
              <li>個人情報の投稿</li>
              <li>不適切なユーザー名やアバター画像の使用、及び不適切な画像やURL、全年齢対象ではないコンテンツの投稿</li>
              <li>アフィリエイトや紹介報酬付きリンクの投稿</li>
              <li>チャンネルトピックと関係のない投稿</li>
              <li>バグバウンティプログラム(脆弱性報奨金制度)において、参加者が同意した規約に違反する行為(未解決の脆弱性の公開や事前に許可を得ていない内容の公開)</li>
              <li>開催中のCTFにおける回答を投稿する行為(明示的に許可されている場合を除く)</li>
              <li>その他公序良俗/法律に反する行為</li>
            </ol>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third">
            <h1 class="title has-text-centered" style="color:#7289da">免責事項</h1>
          </div>
          <div class="column">
            <ul>
              <li>当フォーラムのコンテンツや情報は、参加者が主体的に投稿したものであり、 誤情報や古い情報が掲載される可能性があります。必ずしもその内容の正確性および完全性は保証されていません。また、フォーラムの運営は当該情報に基づいて被ったいかなる損害について、一切責任を負うものではございませんのであらかじめご了承ください。</li>
              <li>当フォーラムから移動された先のホームページ等は、当フォーラムが管理、運営するものではございません。移動先サイトで提供される情報の真偽、サービス等につきましても一切の責任も負いませんのでご了承ください。</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Agreement'
}
</script>

<style>
.desc-content {
  margin: 30px;
}
.attention {
  margin-bottom: 30px;
  color: #FF0000;
}
.desc-content ol {
  padding: 30px;
}
.desc-content li {
  line-height: 2;
  margin-bottom: 15px;
}
</style>