import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    // this when you add query at end of url with a ? (eg: /some-article?date=today)
    // add more queries with & (eg: /some-article?date=today&filter=none)
    // this is then available in this.props.location.query (eg: this.props.location.query.date = 'today')
    // Destructure query from this.props.location
    const { query } = this.props.location;
    // params contains /:article bit that you added in URL
    const { params } = this.props;
    // extracting that :article from params and putting into new const
    const { article } = params;
    // Destructure date and filter from query
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Archives</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
