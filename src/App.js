import React from 'react';
import ReactDOM from 'react-dom';

const quotes = [
  ["On no given day can my horse make big progress, but on any given day, my horse can see big deterioration.", "Denny Emerson"],
  ["The horse will teach you if you will listen.", "Ray Hunt"],
  ["Don’t do too much at once. Do a little bit often.", "Ray Hunt"],
  ["You don’t make him learn, you set it up to allow him to learn. You have to give him dignity. Once you start giving you won’t believe how much you get back.", "Ray Hunt"],
  ["If you always do what you’ve always done you’ll always get what you’ve always got.", 
"Pat Parelli"],
  ["Never knock the curiosity out of a young horse.", 
"Tom Dorrance"],
  ["The horse responds to comfort, they respond to peace better than about anything else you could do. So if the horse responds to you and you give him a little peace and comfort that means more to him than anything.",
"Buck Brannaman"],
  ["If you take the time it takes it takes less time.", 
"Pat Parelli"],
  ["When a horse understands what you want, he will do what that is, right up to the limit of his physical capability... and sometimes well beyond that.","Bill Dorrance"],
  ["The greatest strength a man can achieve is gentleness.","Monty Roberts"]
]

class App extends React.Component
{
constructor(props) {
  super(props);
  this.state = {
    quoteDisp: '',
    randomIndex: '',
    link: '"http://www.twitter.com/intent/tweet?text=',
    quoteLink: ''
   };
      this.randomQuote = this.randomQuote.bind(this);
     // this.tweetLink = this.tweetLink.bind(this)
}

randomQuote(){
        let rando = Math.floor(Math.random() * 10);
    this.setState({
      quoteDisp: quotes[rando][0]
       })
    this.setState({
      authorDisp: quotes[rando][1]
      })
    this.setState({
      link: 'http://www.twitter.com/intent/tweet?text=' + encodeURI(quotes[rando][0] ) + "  – " + quotes[rando][1] 
    })
    
}    

componentDidMount() { 
  this.randomQuote();
  document.title = 'Cowboy Logic';
  };

render() {
 return (
   
   <div id="display-box">
     <div id="quote-bundle">
   <wrapper id="quote-box" class="quote-box">
     <h1>Cowboy Logic</h1>
   <p class="quote" id="text">{this.state.quoteDisp}</p>
   <p class="author" id="author">— {this.state.authorDisp}</p>    
     <button  class="button" id="new-quote" onClick={this.randomQuote}>Generate Different Quote</button>
     <p class="author"><a target="_blank" id="tweet-quote" href={this.state.link}>Tweet this quote</a></p>
     <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
     </wrapper>
     </div>
     </div>
 );
}
};  


export default App;
