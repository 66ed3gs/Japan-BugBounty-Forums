import Layout from '../../layout/Default'

const DocumentPage = () => {
  return (
    <Layout>
      <div className="main">
        <section className="section">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-12-mobile is-10-tablet is-8-desktop document">
              <h1 className="title large has-text-centered">
                参加規約
              </h1>
              <p>
                本規約は、当フォーラムに参加するすべてのユーザ(以下参加者)に適用され、参加者が遵守すべき規約を定めたものです。
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-12-mobile is-10-tablet is-8-desktop document">
              <h1 className="title large has-text-centered">
                禁止事項
              </h1>
              <p>
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
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-12-mobile is-10-tablet is-8-desktop document">
              <h1 className="title large has-text-centered">
                免責事項
              </h1>
              <p>
                当フォーラムのコンテンツや情報は、参加者が主体的に投稿したものであり、 誤情報や古い情報が掲載される可能性があります。必ずしもその内容の正確性および完全性は保証されていません。また、フォーラムの運営は当該情報に基づいて被ったいかなる損害について、一切責任を負うものではございませんのであらかじめご了承ください。
              </p>
               <br/>
              <p>
                当フォーラムから移動された先のホームページ等は、当フォーラムが管理、運営するものではございません。移動先サイトで提供される情報の真偽、サービス等につきましても一切の責任も負いませんのでご了承ください。
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
export default DocumentPage;