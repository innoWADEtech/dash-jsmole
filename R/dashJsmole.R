# AUTO GENERATED FILE - DO NOT EDIT

dashJsmole <- function(id=NULL, actionCode=NULL, atomClick=NULL, atomHover=NULL, atomsMark=NULL, bondClick=NULL, bondHover=NULL, bondsMark=NULL, height=NULL, jmeEvent=NULL, lineWidth=NULL, options=NULL, smiles=NULL, src=NULL, width=NULL) {
    
    props <- list(id=id, actionCode=actionCode, atomClick=atomClick, atomHover=atomHover, atomsMark=atomsMark, bondClick=bondClick, bondHover=bondHover, bondsMark=bondsMark, height=height, jmeEvent=jmeEvent, lineWidth=lineWidth, options=options, smiles=smiles, src=src, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashJsmole',
        namespace = 'dash_jsmole',
        propNames = c('id', 'actionCode', 'atomClick', 'atomHover', 'atomsMark', 'bondClick', 'bondHover', 'bondsMark', 'height', 'jmeEvent', 'lineWidth', 'options', 'smiles', 'src', 'width'),
        package = 'dashJsmole'
        )

    structure(component, class = c('dash_component', 'list'))
}
