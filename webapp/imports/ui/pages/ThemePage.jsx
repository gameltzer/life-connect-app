import { CardActions, CardText, CardTitle } from 'material-ui/Card';
import { Tab, Tabs } from 'material-ui/Tabs';
import { get, has } from 'lodash';

import { Bert } from 'meteor/themeteorchef:bert';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { Image } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import OpacitySlider from '/imports/ui/components/OpacitySlider';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import ReactMixin from 'react-mixin';
import { Session } from 'meteor/session';
import TextField from 'material-ui/TextField';
import { VerticalCanvas, Theme, GlassCard } from 'meteor/clinical:glass-ui';
import { setUserTheme } from '../../api/users/methods';

let defaultState = {
  index: 0
};
Session.setDefault('themePageState', defaultState);


export class ThemePage extends React.Component {
  constructor(props) {
    super(props);
  }
  getMeteorData() {
    // this should all be handled by props
    // or a mixin!
    let data = {
      style: {
        opacity: Session.get('globalOpacity')
      },
      state: defaultState,
      colors: {
        colorA: '',
        colorB: '',
        colorC: '',
        colorD: '',
        colorE: ''
      }
    };

    if (Session.get('themePageState')) {
      data.state = Session.get('themePageState');
    }

    return data;
  }
  resetTheme(){
    console.log('reset theme...')
    var resetString = '';
    if(has(Meteor.settings, 'public.theme.backgroundImagePath')){
      resetString = get(Meteor.settings, 'public.theme.backgroundImagePath'); 
    }
    Meteor.users.update({_id: Meteor.userId()}, {$set: {
      'profile.theme.backgroundImagePath': resetString
    }});
  }
  render(){
    var backgroundThumbnail = {
      width: '191px',
      display: 'inline-block',
      marginRight: '5px',
      marginBottom: '5px',
      height: '115px'
    };

    // deep clone
    var redTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    redTile.background = '#A64C4C';

    var blueTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    blueTile.background = '#89cff0';

    var grayTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    grayTile.background = '#999999';

    var greenTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    greenTile.background = '#AEC9A8';

    var purpleTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    purpleTile.background = '#800080';

    var orangeTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    orangeTile.background = '#ffa500';


    var blackTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    blackTile.background = '#000000';

    var charcoalTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    charcoalTile.background = '#222222';

    var grayTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    grayTile.background = '#999999';

    var smokeTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    smokeTile.background = '#eeeeee';



    var whiteTile = JSON.parse(JSON.stringify(backgroundThumbnail));
    whiteTile.background = '#FFFFFF';

    return(
      <div id='aboutPage'>
        <VerticalCanvas>
          <GlassCard>
            <CardTitle
              title='Theme'
              subtitle='Pick a background and color!'
            />
            <Tabs index={this.data.state.index} onChange={this.handleTabChange}>

              <Tab label='Backgrounds' onActive={this.handleActive} style={{backgroundColor: 'white', color: 'black', borderBottom: '1px solid lightgray'}}>
                <div style={{position: 'relative'}}>

                  <div id='backgroundImageGallary' style={{display: 'inline-block', paddingLeft: '4px', paddingTop: '4px'}}>
                    <Image src='/backgrounds/medical/BambooIllustration.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/Zen.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/Zen-Rocks.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/LargeZenRocks.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/Yoga-Gray.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/Yoga-Ocean.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/Massage.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />

                    <Image src='/backgrounds/medical/BathPetals.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />

                    <Image src='/backgrounds/medical/SaltScrub-Pink.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/SaltScrub-Horizontal.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />

                    <Image src='/backgrounds/medical/SpaBeds.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/Candles.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/Sauna.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />

                    <Image src='/backgrounds/medical/PlasmidRed.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/PlasmidBlue.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />

                    <Image src='/backgrounds/medical/Radiograph-Chest-Portable.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/EmergencyRoom.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />

                    <Image src='/backgrounds/medical/StarTrek-Medbay.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/MedBay.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />
                    <Image src='/backgrounds/medical/Gradient.jpg' style={backgroundThumbnail} responsive onClick={this.onImageClick} />

                    <Image responsive style={purpleTile} onClick={this.onColorClick} />
                    <Image responsive style={orangeTile} onClick={this.onColorClick} />
                    <Image responsive style={redTile} onClick={this.onColorClick} />
                    <Image responsive style={greenTile} onClick={this.onColorClick} />
                    <Image responsive style={blueTile} onClick={this.onColorClick} />

                    <Image responsive style={whiteTile} onClick={this.onColorClick} />
                    <Image responsive style={smokeTile} onClick={this.onColorClick} />
                    <Image responsive style={grayTile} onClick={this.onColorClick} />
                    <Image responsive style={charcoalTile} onClick={this.onColorClick} />
                    <Image responsive style={blackTile} onClick={this.onColorClick} />

                  </div>
                </div>
              </Tab>
              <Tab label='Colors' style={{backgroundColor: 'white', color: 'black', borderBottom: '1px solid lightgray'}}>
                <CardText>
                  <div style={{position: 'relative'}}>
                    <TextField
                      ref='colorA'
                      name='colorA'
                      type='text'
                      floatingLabelText='Color A'
                      floatingLabelFixed={true}
                      value={this.data.colors.colorA}
                      /><br/>
                    <TextField
                      ref='colorB'
                      name='colorB'
                      type='text'
                      floatingLabelText='Color B'
                      floatingLabelFixed={true}
                      value={this.data.colors.colorB}
                      /><br/>
                    <TextField
                      ref='colorC'
                      name='colorC'
                      type='text'
                      floatingLabelText='Color C'
                      floatingLabelFixed={true}
                      value={this.data.colors.colorC}
                      /><br/>
                    <TextField
                      ref='colorD'
                      name='colorD'
                      type='text'
                      floatingLabelText='Color D'
                      floatingLabelFixed={true}
                      value={this.data.colors.colorD}
                      /><br/>
                    <TextField
                      ref='colorE'
                      name='colorE'
                      type='text'
                      floatingLabelText='Color E'
                      floatingLabelFixed={true}
                      value={this.data.colors.colorE}
                      /><br/>
                  </div>
                </CardText>

              </Tab>
              {/*
              <Tab label='Settings' style={{backgroundColor: 'white', color: 'black', borderBottom: '1px solid lightgray'}}>
                <div style={{position: 'relative'}}>
                  <label>Opacity</label>
                  <OpacitySlider />
                  <br />
                  <label>Darkroom</label>
                  <RaisedButton
                    ref='darkroomButton'
                    icon={<FontIcon className="muidocs-icon-image-exposure" />}
                    onClick={this.clickOnDarkroomButton}
                    style={{marginLeft: '20px', backgroundColor: '#dddddd'}} />
                </div>

              </Tab>
              */}

            </Tabs>
            <CardActions>
              <FlatButton id='resetTheme' primary={true} onClick={this.resetTheme}> Reset Theme </FlatButton>
            </CardActions>
          </GlassCard>
        </VerticalCanvas>
      </div>
    );
  }
  handleTabChange(index) {
    var state = Session.get('themePageState');
    state.index = index;
    Session.set('themePageState', state);
  }

  handleActive() {
    //console.log('Special one activated');
  }

  onColorClick(event){
    Session.set('backgroundImagePath', false);
    Session.set('backgroundColor', event.currentTarget.style['background-color']);

    setUserTheme.call({
      _id:  Meteor.userId(),
      backgroundColor: event.currentTarget.style['background-color']
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Background color updated!', 'success');
      }
    });
  }

  onImageClick(event){
    //console.log("onImageClick", 'backgrounds/medical/' + event.currentTarget['src'].split('/')[5]);

    Session.set('backgroundColor', false);
    Session.set('backgroundImagePath', 'backgrounds/medical/' + event.currentTarget['src'].split('/')[5]);

    setUserTheme.call({
      _id:  Meteor.userId(),
      backgroundImagePath: 'backgrounds/medical/' + event.currentTarget['src'].split('/')[5]
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Background image updated!', 'success');
      }
    });
  }

  onVideoClick(){
    //console.log("onVideoClick");

    Session.set('backgroundImagePath', false);
    Session.set('backgroundColor', false);
    Session.set('lastVideoRun', new Date());

    // we're calling setUserTheme without any parameters, which will reset the theme
    // and use the default video background
    setUserTheme.call({
      _id:  Meteor.userId()
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Background image updated!', 'success');
      }
    });
  }

  clickOnDarkroomButton(){
    Session.toggle('darkroomEnabled');
  }
}


ReactMixin(ThemePage.prototype, ReactMeteorData);
