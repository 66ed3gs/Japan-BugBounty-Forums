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
              <li class="is-active">
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
    <section id="description">
      <div class="container desc-content">
        <div class="columns">
          <div class="column is-one-third">
            <h1 class="title has-text-centered" style="color:#7289da">フォーラム概要</h1>
          </div>
          <div class="column">
            Japan BugBounty ForumsはバグバウンティやCTF、セキュリティに関する話題について情報共有をするためのグループです。誰でも自由に参加することができます。
            <hr/>
            <button class="button is-large is-fullwidth is-black" style="background-color:#7289da" onclick="location.href='https://discord.gg/XP92Zxz'">
              Join this community
            </button>
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
.desc-content {
  margin: 30px;
}
</style>
