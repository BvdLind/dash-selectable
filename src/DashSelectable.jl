
module DashSelectable
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("dashselectable.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_selectable",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_selectable.min.js",
    external_url = "https://unpkg.com/dash_selectable@0.0.1/dash_selectable/dash_selectable.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_selectable.min.js.map",
    external_url = "https://unpkg.com/dash_selectable@0.0.1/dash_selectable/dash_selectable.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
