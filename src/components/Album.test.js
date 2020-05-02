import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../Utils';
import Album from './Album';

const setUp = (props={}) => {
    const component = shallow(<Album {...props} />);
    return component;
}

describe('Album Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'AlbumComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render the album title', () => {
        const h3 = findByTestAttr(component, 'albumTitle');
        expect(h3.length).toBe(1);
    });

})
