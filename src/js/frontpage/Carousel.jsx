import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberFirstGradient: 100,
      numberSecondGradient: 80,
      numberFirstWidth: 100,
      numberSecondWidth: 0,
    };

    this.fadingContinue = true;

    this._textFading = this._textFading.bind(this);
    this._textFadingTwo = this._textFadingTwo.bind(this);
    this._textFadingReverse = this._textFadingReverse.bind(this);
  }

  componentDidMount() {
    this._textFading();
  }

  componentDidUpdate(newProps, newState) {
    const header = document.querySelector(".background-header-0");
    const bgString = `linear-gradient(to left, rgba(255, 0, 0, 0) ${
      newState.numberFirstGradient
    }%, rgb(235, 235, 235) ${newState.numberSecondGradient}%)`;

    header.style.background = bgString;
    header.style.backgroundClip = "text";
    header.style.webkitBackgroundClip = "text";
  }

  render() {
    let widthStyleFirst = {
      width: this.state.numberFirstWidth + "%",
    }
    let widthStyleSecond = {
      width: this.state.numberSecondWidth + "%",
    }
    return (
      <div id="carousel-container">
        <div id="background-0" style={widthStyleFirst}>
          <div className="background-overlay-image">
            <div id="text-box-0" className="text-box">
              <h1 className="background-header-0">Celine Heldrup</h1>
              <p>Blog og ernæring</p>
            </div>
          </div>
          <button
            className="next-image-carousel button"
            onClick={() => this._textFadingReverse()}
          >
            >
          </button>
          <button className="previous-image-carousel button">&lt;</button>
        </div>
      </div>
    );
  }

  _textFading() {
    if (!this.fadingContinue) return
    if (this.state.numberFirstGradient > 0) {
      this.state.numberFirstGradient--;
      let newNumberFirstGradient = this.state.numberFirstGradient;
      setTimeout(() => {
        this.setState({
          numberFirstGradient: newNumberFirstGradient
        });
        return this._textFading();
      }, 15);
    } else {
      return this._textFadingTwo();
    }
  }

  _textFadingTwo() {
    if (!this.fadingContinue) return
    if (this.state.numberSecondGradient > 0) {
      this.state.numberSecondGradient--;
      let newNumberSecondGradient = this.state.numberSecondGradient;
      setTimeout(() => {
        this.setState({
          numberSecondGradient: newNumberSecondGradient
        });
        return this._textFadingTwo();
      }, 15);
    } else {
      return;
    }
  }

  _textFadingReverse() {
    this.fadingContinue = false;
    this.state.numberSecondGradient = 80;
    if (this.state.numberFirstGradient < 99) {
      this.state.numberFirstGradient++;
      let newNumberFirstGradient = this.state.numberFirstGradient;
      setTimeout(() => {
        this.setState({
          numberFirstGradient: newNumberFirstGradient
        });
        return this._textFadingReverse();
      }, 15);
    } else {
      this.state.numberSecondGradient = 80;
      return this._carousel()
    }
  }

  _carousel() {
    this.setState({
      numberFirstWidth: 0
    })
  }
}

export default Carousel;
