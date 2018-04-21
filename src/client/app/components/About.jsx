import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section className="about__container">

        <div className="about__items">
          <button
            className={`about__item ${this.props.aboutTopic == 0 ? 'about__item--selected' : ''}`}
            onClick={() => {
              this.props.setAboutTopic(0);
            }}
          > Thesis
          </button>
          <button
            className={`about__item ${this.props.aboutTopic == 1 ? 'about__item--selected' : ''}`}
            onClick={() => {
              this.props.setAboutTopic(1);
            }}
          > Class of 2018
          </button>
          <button
            className={`about__item ${this.props.aboutTopic == 2 ? 'about__item--selected' : ''}`}
            onClick={() => {
              this.props.setAboutTopic(2);
            }}
          > Credits
          </button>

        </div>

        <div className="about__content">

          {(this.props.aboutTopic === 0) &&
          <div>
            <p className="about__para">
            Proudly present butt to human mewl for food at 4am. Crash against wall but walk away like nothing happened eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap for chase the pig around the house. Sleep on my human's head thinking longingly about tuna brine weigh eight pounds but take up a full-size bed and meow lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back.
            </p>
            <p className="about__para">
            Sniff catnip and act crazy my left donut is missing, as is my right ask to go outside and ask to come inside and ask to go outside and ask to come inside. Scratch stare at wall turn and meow stare at wall some more meow again continue staring yet chase dog then run away yet brown cats with pink ears. Eat all the power cords behind the couch put toy mouse in food bowl run out of litter box at full speed .
            </p>
            <p className="about__para">
            Kitty poochy cat is love, cat is life so run in circles, yet scream for no reason at 4 am poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls when in doubt, wash claws in your leg.
            </p>
          </div>
          }

          {(this.props.aboutTopic === 1) &&
          <div>
            <img className="about__class-image" src="https://placebear.com/400/200" />
            <p className="about__para">
            Sniff catnip and act crazy my left donut is missing, as is my right ask to go outside and ask to come inside and ask to go outside and ask to come inside. Scratch stare at wall turn and meow stare at wall some more meow again continue staring yet chase dog then run away yet brown cats with pink ears. Eat all the power cords behind the couch put toy mouse in food bowl run out of litter box at full speed .
            </p>
            <p className="about__para">
            Kitty poochy cat is love, cat is life so run in circles, yet scream for no reason at 4 am poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls when in doubt, wash claws in your leg.
            </p>
          </div>
          }


          {(this.props.aboutTopic === 2) &&
          <div>
            <ul className="about__list">
              <li> Hoomins </li>
              <li> Hoomins </li>
              <li> Hoomins </li>
              <li> Hoomins </li>
              <li> Hoomins </li>
            </ul>
          </div>
          }

        </div>
      </section>
    );
  }
}

export default About;
