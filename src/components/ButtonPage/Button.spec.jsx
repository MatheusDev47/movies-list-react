import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ButtonPage } from "."

const fn = jest.fn()

describe('<ButtonPage />', () => {
    it('Should render the button with the text "Load more films"', () => {
        render(<ButtonPage text="Load more films"/>)

        expect(screen.getByRole('button', {name: /load more films/i})).toBeInTheDocument()
    })

    it('Should button function onClick is working', () => {
        render(<ButtonPage text="Load more films" onClick={fn} />)

        userEvent.click(screen.getByRole('button', { name: /load more films/i }))

        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('Should button is disabled when disabled is true', () => {
        render(<ButtonPage text="Load more films" onClick={fn} disabled={true}/>)

        expect(screen.getByRole('button', { name: /load more films/i })).toBeDisabled()
    })

    it('Should button is enabled when disabled is false', () => {
        render(<ButtonPage text="Load more films" onClick={fn} disabled={false}/>)

        expect(screen.getByRole('button', { name: /load more films/i })).toBeEnabled()
    })

    it('Should match snapshot', () => {
        render(<ButtonPage text="Load more films" onClick={fn} disabled={false} />)

        expect(screen.getByRole('button', { name: /load more films/i })).toMatchSnapshot()
    })
})