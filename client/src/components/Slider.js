import { styled } from "@mui/system";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    300: '#66B2FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B3',
    900: '#003A75',
};

const Slider = styled(BaseSlider)(
    ({ theme }) => `
    color: ${theme.palette.mode === 'light' ? blue[500] : blue[300]};
    height: 6px;
    width: 100%;
    padding: 16px 0;
    display: inline-block;
    position: relative;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
    pointer-events: none;

    & .${sliderClasses.rail} {
        display: block;
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background-color: currentColor;
        opacity: 0.4;
    }

    & .${sliderClasses.track} {
        display: block;
        position: absolute;
        height: 4px;
        border-radius: 2px;
        background-color: currentColor;
    }

    & .${sliderClasses.thumb} {
        position: absolute;
        width: 16px;
        height: 16px;
        margin-left: -6px;
        margin-top: -6px;
        box-sizing: border-box;
        border-radius: 50%;
        outline: 0;
        border: 3px solid currentColor;
        background-color: #fff;
    `,
);

export default Slider;