import Layout from '../layout/Default'
import React from 'react'
import Link from 'next/link'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    switch (this.props.statusCode) {
      case 404:
        return (
          <Layout>
            <div className="main">
              <section className="section has-text-centered" style={{margin:"0 auto"}}>
                <h1 style={{fontSize:"4em"}}>{this.props.statusCode}</h1>
                <p>
                  このページは存在しません。<br/>
                  ユーザーにより削除された、またはリンクが間違っている可能性があります。<br/><br/>
                  <Link href="/">
                    <button className="button">
                      <span className="icon"><i className="fas fa-arrow-alt-circle-left"></i></span>
                      <span>トップページに戻る</span>
                    </button>
                  </Link>
                </p>
                <hr/>
              </section>
            </div>
          </Layout>
        )
        case 503:
          return (
            <Layout>
              <div className="main">
                <section className="section has-text-centered" style={{margin:"0 auto"}}>
                  <h1 style={{fontSize:"4em"}}>{this.props.statusCode}</h1>
                  <p>
                    サーバー側でエラーが発生しました。<br/>
                    申し訳ございませんが、時間を空けてから再度お試しください。
                  </p>
                  <hr/>
                </section>
              </div>
            </Layout>
          )
      default:
        return (
          <Layout>
            <div className="main">
              <section className="section has-text-centered" style={{margin:"0 auto"}}>
                <h1 style={{fontSize:"4em"}}>{this.props.statusCode}</h1>
                <p>
                  サーバー側でエラーが発生しました。<br/>
                  申し訳ございませんが、時間を空けてから再度お試しください。
                </p>
                <hr/>
              </section>
            </div>
          </Layout>
        )
    }
  }
}