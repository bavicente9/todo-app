import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux"
import { store } from "../../app/store";
import { changeToLight } from "../../features/theme/themeSlice";


import BackGroundLayout from "./BackgroundLayout"


describe('BackGroundLayout', () => {



    it('dark theme as default', () => {
        render(
            <Provider store={store}>
                <BackGroundLayout />
            </Provider>

        );
        const topPart = document.getElementsByClassName('background_top--dark')
        const bottomPart = document.getElementsByClassName('background_bottom--dark')

        expect(topPart.length).toBe(1)
        expect(bottomPart.length).toBe(1)

    })


    it('change of class to light theme appear correctly', async () => {
        act(() => {
            render(
                <Provider store={store}>
                    <BackGroundLayout />
                </Provider>
            )
            store.dispatch(changeToLight())
        })
        const topPart = document.getElementsByClassName('background_top--light')
        const bottomPart = document.getElementsByClassName('background_bottom--light')
        expect(topPart.length).toBe(1)
        expect(bottomPart.length).toBe(1)

    })
})