!!! note "Adjustment of the Anchor Media parameter to Media Path"
        For Voice Gateway 2025.19 and later, the Anchor Media parameter has been renamed to Media Path and includes more options. The previously available options correspond to:

        - **Full Media** — the toggled on Anchor Media parameter in earlier versions.
        - **Partial Media** — the toggled off Anchor Media parameter in earlier versions.
    
        The Media Path parameter is hidden behind the feature flag `FEATURE_DISABLE_VG_MEDIA_PATH`, with a default value of `false`. It is available only in environments where the feature flag is set to `false`.