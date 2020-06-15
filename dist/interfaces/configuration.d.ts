export interface ConfigurationInterface {
    /**
     * Retorna o token da conta
     */
    getToken: () => string;
    /**
     * Retorna se o ambiente configurado é produção
     */
    isProduction: () => boolean;
    /**
     * Retorna se o ambiente configurado é sandbox
     */
    isSandbox: () => boolean;
}
