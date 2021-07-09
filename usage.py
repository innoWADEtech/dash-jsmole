import dash_jsmole
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
# from flask import send_from_directory

app = dash.Dash(__name__)

app.layout = html.Div([
    dcc.Input(id='smiles', placeholder='smiles string', value='', debounce=True),
    dcc.Input(id='markatoms', placeholder='atom,color1-6 1,2,4,6', debounce=True, value=''),
    dash_jsmole.DashJsmole(
        id='editor',
        smiles='CN1C=NC2=C1C(=O)N(C(=O)N2C)C',
        height='400px',
        width='400px',
        # src="jsme/jsme.nocache.js",
        options="marker,markermenu",
        atomsMark='1,1,2,2,3,3',
        bondsMark='6,1,7,2',
    ),
    html.Div(id='smilesout'),
    html.Div(id='event'),
    html.Div(id='bondhover')
])

# Example serving jsme-editor from local
# @app.server.route('/jsme/<path:filename>')
# def base_static(filename):
#    return send_from_directory(app.server.root_path + '/jsme/', filename)

# Input smiles string to display
@app.callback(
    Output('editor', 'smiles'),
    Input('smiles', 'n_submit'),
    State('smiles', 'value'),
    prevent_initial_call=True)
def smiles(submit, value):
    return value

# Input atoms to mark background color
@app.callback(
    Output('editor', 'atomsMark'),
    Input('markatoms', 'n_submit'),
    State('markatoms', 'value'),
    prevent_initial_call=True,
    )
def entry(submit, value):
    return value

# Output smiles string from editor
@app.callback(
    Output('smilesout', 'children'),
    Input('editor', 'smiles'),
)
def display_output(value):
    return value

# Output events from editor
@app.callback(
    Output('event', 'children'),
    Input('editor', 'jmeEvent'),
)
def display_output(value):
    return f"Event: {value}"

# Output bond # hover over
@app.callback(
    Output('bondhover', 'children'),
    Input('editor', 'bondHover'),
)
def display_output(value):
    return f"Bond #: {value}"

if __name__ == '__main__':
    app.run_server(debug=True)
