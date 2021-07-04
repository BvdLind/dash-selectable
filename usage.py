import dash
from dash.dependencies import Input, Output
import dash_html_components as html
from dash_selectable import DashSelectable

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        DashSelectable(
            id="dash-selectable",
            children=[html.P("Select this text"), html.P(id="output")],
        )
    ]
)


@app.callback(Output("output", "children"), [Input("dash-selectable", "selectedValue")])
def display_output(value):
    return "You have selected {}".format(value)


if __name__ == "__main__":
    app.run_server(debug=True)
