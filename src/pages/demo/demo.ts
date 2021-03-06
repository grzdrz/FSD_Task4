/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../../plugin';
import OptionsPanel from '../../components/options-panel/OptionsPanel';
import ColorCustomizer from '../../components/color-customizer/color-customizer';
import SliderWithPhysic from '../../components/slider-with-physic/slider-with-physic';
import '../base/base';
import './demo.scss';

const options = [
  {
    modelData: {
      minValue: -100,
      maxValue: 100,
      values: [-99, -7, -3, 3, 99],
      stepSize: 1,
      canPush: true,
      filledStrips: [true, false],
    },
    viewData: {
      sliderStripThickness: 10,
      handleWidth: 20,
      handleHeight: 20,
      borderThickness: 10,
      maxSegmentsCount: 6,
      scaleFontSize: 15,
      angle: 45,
      isHandlesSeparated: false,
      hasScale: true,
      scaleMargin: 30,
      hasOptions: true,
    },
  },
  {
    modelData: {
      minValue: -100,
      maxValue: 100,
      values: [0, 50],
      stepSize: 1,
      canPush: true,
      filledStrips: [false, true],
    },
    viewData: {
      sliderStripThickness: 12,
      handleWidth: 20,
      handleHeight: 20,
      borderThickness: 4,
      maxSegmentsCount: 6,
      scaleFontSize: 15,
      angle: 70,
      isHandlesSeparated: true,
      hasTooltip: true,
      hasScale: true,
      scaleMargin: 30,
      hasOptions: true,
    },
  },
];
const optionsPanelContainers = Array.from(document.querySelectorAll('.js-demo__range-slider-container'));
const optionPannels = [];
optionsPanelContainers.forEach((container, index) => {
  optionPannels.push(new OptionsPanel(<HTMLElement>container, options[index].modelData, options[index].viewData));
});

const colorCustomizerContainer = <HTMLElement>(document.querySelector('.js-demo__color-customizer'));
const colorCustomizer = new ColorCustomizer(colorCustomizerContainer);

const sliderWithPhysicContainer = <HTMLElement>(document.querySelector('.js-demo__slider-with-physic'));
const sliderWithPhysic = new SliderWithPhysic(sliderWithPhysicContainer);
