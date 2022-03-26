import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {expect} from 'chai';
import Grid from '@mui/material/Grid';

configure({ adapter: new Adapter() });


it('renders without a crash', () => {
  shallow(<App />)
});

describe('<App />', () => {
  it('renders Grid', () => {
    const component=shallow(<App />)
     expect (component.containsMatchingElement(<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}></Grid>)).to.equal(true)
  })
})
