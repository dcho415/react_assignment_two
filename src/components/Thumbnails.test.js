import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../Utils';
import Thumbnails from './Thumbnails';

const setUp = (props={}) => {
    const component = shallow(<Thumbnails {...props} />);
    return component;
}

describe('Thumbnails Component', () => {

    let component;
    beforeEach(() => {
        const props = {
            data: {
                url: 'Test Url'
            }
        };
        component = setUp(props);
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'ThumbnailsComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render thumbnail image', () => {
        const image = findByTestAttr(component, 'thumbnail');
        expect(image.length).toBe(1);
    })

    it('Should render photo title', () => {
        const title = findByTestAttr(component, 'photoTitle');
        expect(title.length).toBe(1);
    })

})
