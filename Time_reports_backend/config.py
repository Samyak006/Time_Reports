from pydantic_settings import BaseSettings, SettingsConfigDict # type: ignore

class Settings(BaseSettings):
    client_id: str
    client_secret: str
    time_base_url: str
    access_token_url: str
    '''
    Pydantic model configuration.
    model_config (SettingsConfigDict): Configuration for the Pydantic model.
    '''
    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()