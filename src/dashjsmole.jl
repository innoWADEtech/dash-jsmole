# AUTO GENERATED FILE - DO NOT EDIT

export dashjsmole

"""
    dashjsmole(;kwargs...)

A DashJsmole component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `actionCode` (Real; optional): set  action code for menu
- `atomClick` (Real; optional): The atom clicked of component
- `atomHover` (Real; optional): The highlighted Atom
- `atomsMark` (String; optional): The atoms marked string atom,color
- `bondClick` (Real; optional): The bond clicked of component
- `bondHover` (Real; optional): The highlighted bond
- `bondsMark` (String; optional): The bonds marked string bond,color
- `height` (String; optional): The height of rendered componenet
- `jmeEvent` (Dict; optional): jsmeEvent information
- `lineWidth` (Real; optional): The line width of component
- `options` (String; optional): The options for rendered component
- `smiles` (String; optional): The smiles string of component
- `src` (String; optional): The source url for jsme.nocache.js
- `width` (String; optional): The width of rendered compnent
"""
function dashjsmole(; kwargs...)
        available_props = Symbol[:id, :actionCode, :atomClick, :atomHover, :atomsMark, :bondClick, :bondHover, :bondsMark, :height, :jmeEvent, :lineWidth, :options, :smiles, :src, :width]
        wild_props = Symbol[]
        return Component("dashjsmole", "DashJsmole", "dash_jsmole", available_props, wild_props; kwargs...)
end

