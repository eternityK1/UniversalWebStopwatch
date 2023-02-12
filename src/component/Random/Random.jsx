import {Button} from "@material-ui/core";
import randomCss from "./Random.module.css";
import {useDispatch, useSelector} from "react-redux";
import {
    randomizerActionsSetMax,
    randomizerActionsSetMin,
    randomizerActionsSetResult
} from "../../store/actionsCreators/randomizerActionsCreater";

const Random = () => {
    const dispatch = useDispatch();
    const genInt = useSelector(state => state.randomizer.genInt)
    const minGen = useSelector(state => state.randomizer.minGen)
    const maxGen = useSelector(state => state.randomizer.maxGen)


    const generate = () => {
        if (maxGen < minGen) {
            dispatch(randomizerActionsSetResult("Не верный диапазон"));
            return;
        }

        const resultNumber = Math.floor(Math.random() * (maxGen - minGen + 1) + minGen);
        dispatch(randomizerActionsSetResult(resultNumber));
    }

    return (<div className={randomCss.randomGen}>
        <div className={randomCss.randomGen__result}> {genInt}</div>
        <div className={randomCss.randomGen__change}>
            <div className={randomCss.randomGen__cntInput}>
                <div className={randomCss.randomGen__descInput}>мин:</div>
                <input
                    value={minGen}
                    onChange={(e) => {
                        const inputNumber = Number(e.target.value.replace(/\D/, ''));
                        dispatch(randomizerActionsSetMin(inputNumber));
                    }}
                    className={randomCss.randomGen__input}
                />
            </div>
            <div className={randomCss.randomGen__cntInput}>
                <div className={randomCss.randomGen__descInput}>макс:</div>
                <input
                    value={maxGen}
                    onChange={(e) => {
                        const inputNumber = Number(e.target.value.replace(/\D/, ''));
                        dispatch(randomizerActionsSetMax(inputNumber));
                    }}
                    className={randomCss.randomGen__input}
                />
            </div>
        </div>
        <Button variant="contained" color='secondary' onClick={generate}>Генерировать</Button>
    </div>);
}

export default Random;